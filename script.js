body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header nav ul {
    list-style: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin-right: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.hero {
    background-color: #2a9d8f;
    color: white;
    padding: 100px 20px;
    text-align: center;
}

footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}

.grape-nuts {
    font-family: "Grape Nuts", cursive;
    font-size: 30px;
    color: #333;
}

.logo {
    font-family: 'Covered By Your Grace', cursive;
    font-size: 36px;
}

/* Hamburger Menu */
.hamburger {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.hamburger .line {
    width: 100%;
    height: 4px;
    background-color: #333;
}

/* Mobile Navigation */
.mobile-nav {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    padding-top: 60px;
    transition: left 0.3s ease-in-out;
}

.mobile-nav ul {
    list-style: none;
    padding: 0;
}

.mobile-nav ul li {
    padding: 15px;
}

.mobile-nav ul li a {
    color: white;
    text-decoration: none;
}

/* Dropdown Menu */
.menu {
    position: absolute;
    top: 50px;
    left: 10px;
    background: #333;
    color: white;
    display: none;
    padding: 10px;
    border-radius: 5px;
}

.menu ul {
    list-style: none;
    padding: 0;
}

.menu ul li {
    padding: 10px;
}

.menu ul li a {
    color: white;
    text-decoration: none;
}
