// module/navigation.js 

/*class Navigation {
  constructor() {
    this.handleClick();
  }
  
  handleClick(iconName, index) {
    console.log('Icon clicked:', iconName);
    document.querySelectorAll('.x-main > div').forEach(element => {
      element.style.display = 'none';
    });
    document.querySelector(`.x-${iconName.toLowerCase()}`).style.display = 'block';
  }
  
}

export default Navigation;*/

// module/navigation.js

class Navigation {
  constructor() {
    console.log('Navigation instance created');
  }

 handleClick(iconName, index) {
    console.log('Icon clicked:', iconName);
    document.querySelectorAll('.x-main > div').forEach(element => {
      element.style.display = 'none';
    });
    document.querySelector(`.x-${iconName.toLowerCase()}`).style.display = 'block';
  }
}

const navigation = new Navigation();

export default navigation;
