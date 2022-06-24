class SummaryView
{
    constructor(parent)
    {
        this._elem = document.createElement("section");
        this._elem.classList.add("summary");

        this._elem.innerHTML = `<h2>Összesítés</h2>
				
        <div>
            <h3>Tételek:</h3>
            <p class="itemCount">-</p>
            <h3>Teljes költség:</h3>
            <p class="fullPrice">-</p>
            
            <a href="" class="clear">Kiadás lista ürítése</a>
        </div>`;

        this._clearBtn = this._elem.querySelector('.clear');

        parent.appendChild(this._elem);
    }
    update()
    {
        var item = ItemModel.GetList();
        var itemCount = 0;
        var price = 0;
        item.forEach(element => {
            if(element.visible){
            itemCount +=  1;
            price += parseInt(element.price);
            }
        });
        this._elem.querySelector('.itemCount').innerHTML = `${itemCount} darab`;
        this._elem.querySelector('.fullPrice').innerHTML = `${price} HUF`;
    }
    clear(method)
    {
        this._clearBtn.onclick = () =>
        {
            method();
        }
    }
}