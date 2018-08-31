{
    let originConsole = console.log.bind(console);
    console.log = function(...args) {
        document.querySelector('div.console').innerText = args.join(' ');
        originConsole(...args);
    }
}