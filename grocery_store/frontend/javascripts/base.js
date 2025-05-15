
const
    root = document.documentElement;


document.addEventListener('DOMContentLoaded', () => {

    document.documentElement.style = "transition: color 0.1618s linear, background-color 0.1618s linear, border-color 0.1618s linear;";

    //const
    //    arr_func_menu = [

    //        function MenuHome() {

    //            console.log('home');
    //        },
    //        function MenuProfile() {

    //            console.log('profile');
    //        },
    //        function MenuList() {

    //            console.log('list');
    //        },
    //        function MenuHistory() {

    //            console.log('history');
    //        }
    //    ];

    function ThemeChange() {

        const
            theme = document.getElementById('Theme'),
            current_theme = Number(theme.dataset.activated),
            next_theme = (current_theme + 1) % theme_colors.length;


        apply_theme(current_theme);
        theme.dataset.activated = `${next_theme}`;

        function apply_theme(index) {

            const
                theme_description = document.getElementById('theme_description'),
                { bg, fg, name } = theme_colors[index];


            root.style.setProperty('--bg_color', bg);
            root.style.setProperty('--fg_color', fg);

            theme_description.innerText = name;
        }
    }
    //function Distribution(E) {

    //    const
    //        menu = document.getElementById('Menu_Box'),
    //        last_index = Number(menu.dataset.activated),
    //        clicked = E !== undefined;

    //    let
    //        click;

    //    if (clicked) {

    //        click = E.target;

    //        if (click.matches('div[id="Menu_Box"]'))
    //            return;
    //    }
    //    else
    //        click = menu.children[last_index];

    //    const
    //        box = Array.from(menu.children),
    //        last_element = box[last_index],
    //        index = box.indexOf(click);


    //    if (last_index !== index || !clicked) {

    //        click.dataset.before = click.innerText;
    //        click.innerText = `( ${click.dataset.before} )`;
    //        arr_func_menu[index]();

    //        if (clicked) {

    //            last_element.innerText = last_element.dataset.before
    //            menu.setAttribute('data-Activated', `${index}`);
    //        }
    //    }
    //}

    //-----------------------------------------------

    ThemeChange();
    /*Distribution();*/

    //-----------------------------------------------

    document.getElementById("Theme").addEventListener('click', ThemeChange);
    //document.getElementById("Menu_Box").addEventListener('click', Distribution);
});
