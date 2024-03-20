function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    /*The below code targets the .menu-links and .menu-icon class list,
    and then adds another class called open. style.css has styles that only apply
    to those classes when they are also accompanied by the open class.
    The toggle keyword means that if the open class is already there, it will
    instead remove it. */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}