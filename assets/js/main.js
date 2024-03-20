const mainDashboard = document.querySelector(".dashboard");
const closeSidebarBtn = document.querySelector(".sidebar-arrow");
const sidebarSmClassName = "sidebar-sm";

closeSidebarBtn.addEventListener("click", () => {
  if (mainDashboard.classList.contains(sidebarSmClassName)) {
    mainDashboard.classList.remove(sidebarSmClassName);
    return;
  }

  mainDashboard.classList.add(sidebarSmClassName);
});
