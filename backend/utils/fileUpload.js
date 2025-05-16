const multer = require("multer");
const path = require("path");

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Xác định thư mục lưu trữ file upload là thư mục uploads trong backend
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    // Giữ nguyên tên file gốc khi upload
    // Cho phép ghi đè lên file đã tồn tại
    cb(null, file.originalname);
  },
});

// Bộ lọc file chỉ chấp nhận hình ảnh
const fileFilter = (req, file, cb) => {
  // Kiểm tra nếu file là hình ảnh thì cho phép upload
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    // Nếu không phải hình ảnh thì trả về lỗi
    cb(new Error("KHông đúng định dạng ảnh! Vui lòng tải lại."), false);
  }
};

// Tạo instance multer với các cấu hình
const upload = multer({
  storage: storage, // Sử dụng cấu hình lưu trữ đã định nghĩa
  limits: {
    fileSize: 5 * 1024 * 1024, // Giới hạn kích thước file là 5MB
  },
  fileFilter: fileFilter, // Áp dụng bộ lọc file
});

module.exports = upload;
