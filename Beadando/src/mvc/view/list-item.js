class ListItem
{
    constructor(id, parent)
    {
        this.id = id;
        this._elem = document.createElement("li");

        this._elem.innerHTML = `<div  class="basicItem">
        <div>
        <h2 class="itemTitle">-</h2>
        <a href="" title="done" class="done">
            <i class="fas fa-check"></i>
        </a>
        <a href="" title="update" class="upd">Szerkeszt</a>
    </div>
    
    <p class="itemPrice">-</p>
    </div>`;
        this._basicItem = this._elem.querySelector('.basicItem');


        parent.appendChild(this._elem);
    }
    update(title, price)
    {
        this._elem.querySelector('.itemTitle').innerHTML = title;
        this._elem.querySelector('.itemPrice').innerHTML = `${price} HUF`;
    }
    onclick(method)
    {
        this._elem.querySelector('.done').onclick = (e) =>
        {
            e.preventDefault();
            method(this);
        }
    }


    onclickUpdate(method)
    {
        this._elem.querySelector('.upd').onclick = (e) =>
        {
            e.preventDefault();
            method(this);
        }
    }


    remove()
    {
        this._elem.parentNode.removeChild(this._elem);
    }
}