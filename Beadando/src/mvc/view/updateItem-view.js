class UpdateItem
{
    constructor(id, parent)
    {
        this.id = id;
        this._elem = document.createElement("section");
        this._list = ItemModel.GetList();
        for(var i=0; i<this._list.length; i++){
            if(this._list[i].id == this.id){
                this.item = this._list[i];
            }
        }

        this._elem.innerHTML = `
        <form>
        <label class="newNameLbl">Új név:</label><br>
        <input type="text" id="newName" value="${this.item.name}"><br>
        <label class="newPriceLbl">Új ár:</label><br>
        <input type="number" id="newPrice" value="${this.item.price}">
        <button class="save">Mentés</button>
        <button class="cancel">Mégsem</button>
        </form>`



        parent.appendChild(this._elem);

    }
    onSaveClick(method)
    {
        this._elem.querySelector('.save').onclick = (e) =>
        {
            this.newName = document.getElementById("newName").value;
            this.newPrice = document.getElementById("newPrice").value;
            e.preventDefault();
            method(this);
        }
    }
}