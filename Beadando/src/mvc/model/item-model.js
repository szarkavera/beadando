class ItemModel
{
    static AddItem(record)
    {
        var list = this.GetList();

        record.id = list.length +1;
        record.visible = true;
        list.push(record);

        localStorage.setItem('itemlist-list', JSON.stringify(list));

    }
    static GetList()
    {
        var list = localStorage.getItem('itemlist-list');

        if(!list) list = [];
        else list = JSON.parse(list);

        return list;
    }
    static RemoveItem(id)
    {
        var list = this.GetList();

        list[id -1].visible = false;
        localStorage.setItem('itemlist-list', JSON.stringify(list));
    }
    static UpdateItem(id, name, price)
    {
        var list = this.GetList();

        list[id -1].price = price;
        list[id -1].name = name;
        localStorage.setItem('itemlist-list', JSON.stringify(list));
    }
}