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
}

window.onload = closeOpenSidebar;
