const Dashboard = {
  resetSidebarClassName: () => {
    const mainDashboard = document.querySelector(".dashboard");
    mainDashboard.classList.remove(...["sidebar-open", "sidebar-close"]);
  },

  closeOpenSidebar: () => {
    const closeSidebarBtn = document.querySelector(".sidebar-arrow");

    closeSidebarBtn.addEventListener("click", () => {
      const isMobile = window.innerWidth <= 768;
      const mainDashboard = document.querySelector(".dashboard");
      const sidebarClassName = isMobile ? "sidebar-open" : "sidebar-close";

      mainDashboard.classList.toggle(sidebarClassName);
    });
  },

  selectFiles: () => {
    const checkboxList = document.querySelectorAll(
      'table td input[type="checkbox"]'
    );
    const inputCheckAll = document.getElementById("check-all");

    inputCheckAll.addEventListener("click", () => {
      for (const checkbox of checkboxList) {
        checkbox.checked = inputCheckAll.checked;
      }
    });
  },
};

window.addEventListener("load", () => {
  Dashboard.closeOpenSidebar();
  Dashboard.selectFiles();
});

window.addEventListener("resize", () => {
  Dashboard.resetSidebarClassName();
});
