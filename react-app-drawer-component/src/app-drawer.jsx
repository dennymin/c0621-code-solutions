import React from 'React';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.showDrawer = this.showDrawer.bind(this);
    this.hideDrawer = this.hideDrawer.bind(this);
    this.state = { burgerClicked: false };
  }

  showDrawer(e) {
    if (e.target.className === 'fas fa-bars') {
      this.setState({ burgerClicked: true });
    }
  }

  hideDrawer(e) {
    if (e.target.className.includes('link') || (e.target.className.includes('page-container'))) {
      this.setState({ burgerClicked: false });
    }
  }

  render() {
    const burgerClass = 'fas fa-bars';
    let menuClass = null;
    let pageClass = null;
    if (this.state.burgerClicked === true) {
      menuClass = 'drawer white-background-color drawer-reveal';
      pageClass = 'page-container full-vp background-pepe transparent-background-color';
    } else if (this.state.burgerClicked === false) {
      menuClass = 'drawer white-background-color';
      pageClass = 'page-container full-vp white-background-color background-pepe';
    }
    return (
      <div onClick={this.hideDrawer} className={pageClass}>
        <i onClick={this.showDrawer} className={burgerClass}></i>

        <div className={menuClass}>
          <div>
            <h1>Menu</h1>
          </div>
          <div className="align-items-center link">
            <a className="target-link">About</a>
          </div>
          <div className="align-items-center link">
            <a className="target-link">Get Started</a>
          </div>
          <div className="align-items-center link">
            <a className="target-link">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}
