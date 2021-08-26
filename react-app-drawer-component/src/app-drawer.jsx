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
    if (e.target.className === 'target-link' || (e.target.className === 'page-container full-vp transparent-background-color')) {
      this.setState({ burgerClicked: false });
    }
  }

  render() {
    let burgerClass = null;
    let menuClass = null;
    let pageClass = null;
    if (this.state.burgerClicked === true) {
      burgerClass = 'hidden';
      menuClass = 'drawer white-background-color';
      pageClass = 'page-container full-vp transparent-background-color';
    } else if (this.state.burgerClicked === false) {
      burgerClass = 'fas fa-bars';
      menuClass = 'drawer white-background-color hidden';
      pageClass = 'page-container full-vp white-background-color';
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
