class AppView
{
    static ClearTarget()
    {
        this.app.innerHTML = '';
    }
    static NavigationEvents(methods)
    {
        var nav = document.querySelectorAll('#navigation-bar a');

        function NavigationClick(evt)
        {
            evt.preventDefault();
            methods[ this.dataset.index ]();
        }

        nav.forEach((elem, x) => 
            {
                elem.dataset.index = x;
                elem.onclick = NavigationClick;
            });
    }
}
AppView.app = document.querySelector('#main > .inside');
