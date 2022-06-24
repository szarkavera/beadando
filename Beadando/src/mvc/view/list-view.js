class ListView
{
    constructor(parent)
    {
      this._elem = document.createElement("section");
        this._elem.classList.add("list");

        this._elem.innerHTML = `<h2>Tételek listája</h2>
				
        <div class="message">
            <p>A lista üres. <br> Adj hozzá új tételt!</p>
        </div>
        
        <ul class="ulList"></ul>`;

        this._message = this._elem.querySelector('.message');
        this._ulList = this._elem.querySelector('.ulList');
        
        this._ulList.style.display = "none";
        this._message.style.display = "none";

        parent.appendChild(this._elem);

        this.items = [];
    }
    addItem(id, title, price)
    {
        var ul = this._elem.querySelector('ul');
        var item = new ListItem(id, ul);
        item.update(title, price);

        this.items.push(item);
    }
    update(){
        var item = ItemModel.GetList();
        var i = 0;
        if(item.length > 0){
        item.forEach(element => {
            if(element.visible){
                this.addItem(element.id, element.name, element.price);
                i = i+1;
            }
        });
        if(i == 0) this._message.style.display = "block";
        this._ulList.style.display = "";
        }
        else
        {
            this._ulList.style.display = "";
            this._message.style.display = "block";
        }
    }

    onItemClick(method)
    {
        for(var item of this.items)
        {
            item.onclick(method);
        }
    }

    onUpdateClick(method)
    {
        for(var item of this.items)
        {
            item.onclickUpdate(method);
        }
    }
}