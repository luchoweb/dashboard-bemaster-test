const closeOpenSidebar = () => {
  const mainDashboard = document.querySelector(".dashboard");
  const closeSidebarBtn = document.querySelector(".sidebar-arrow");

  const sidebarCloseClassName = "sidebar-close";
  const sidebarOpenClassName = "sidebar-open";

  closeSidebarBtn.addEventListener("click", () => {
    if (mainDashboard.classList.contains(sidebarCloseClassName)) {
      mainDashboard.classList.remove(sidebarCloseClassName);
      mainDashboard.classList.add(sidebarOpenClassName);
      return;
    }

    mainDashboard.classList.add(sidebarCloseClassName);
    mainDashboard.classList.remove(sidebarOpenClassName);
  });
};

const selectFiles = () => {
  const checkboxes = document.querySelectorAll('td input[type="checkbox"]');
  const checkAll = document.getElementById("check-all");

  checkAll.addEventListener("click", () => {
    for (const checkbox of checkboxes) {
      checkbox.checked = checkAll.checked;
    }
  });
}

window.addEventListener("load", () => {
  closeOpenSidebar();
  selectFiles();
});
