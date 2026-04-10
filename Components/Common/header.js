class MainHeader extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block'; 
    this.loadLocalScript("../Components/Common/Mobile/mobilenavheader.js");
    this.loadLocalScript("../Components/Common/Web/webnavheader.js");
    this.render();
  }

  loadLocalScript(path) {
    // Check if it's already there to prevent double-loading
    if (document.querySelector(`script[src="${path}"]`)) return;

    const script = document.createElement('script');
    script.src = path;
    script.defer = true; // Best for performance
    document.head.appendChild(script);
  }

  render() {
    this.innerHTML = `
    <!-- DESKTOP HEADER (Visible on md and up) -->
    <web-nav-header style="height: 90px; margin-left: 80px; margin-right: 31px;"></web-nav-header>
    <!-- Mobile HEADER (Visible on md and up) -->
    <mobile-nav-bar></mobile-nav-bar>
    `;
  }
}

customElements.define('main-header', MainHeader);
