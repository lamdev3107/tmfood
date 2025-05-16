document.addEventListener("DOMContentLoaded", function () {
  const customerBtn = document.querySelector(".customer");
  const staffBtn = document.querySelector(".staff");
  const container = document.querySelector(".container");

  function redirectWithAnimation(targetURL) {
    container.style.transition = "opacity 0.5s ease-out";
    container.style.opacity = "0";

    setTimeout(() => {
      window.location.href = targetURL;
    }, 500);
  }

  customerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    redirectWithAnimation("/customer/trang_login_khach_hang.html");
  });

  staffBtn.addEventListener("click", function (event) {
    event.preventDefault();
    redirectWithAnimation("/admin/trang_login_nhan_vien.html");
  });
});
