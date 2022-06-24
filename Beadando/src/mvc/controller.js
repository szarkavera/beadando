class Controller
{
    static Prepare()
    {
        AppView.NavigationEvents([
            this.NewItem,
            this.ItemInfo,
            this.Summary
        ]);
    }
    static NewItem()
    {
        AppView.ClearTarget();
        var input = new InputView(AppView.app);
        input.onSubmit((inp) => 
        {
            ItemModel.AddItem(inp);
            input.clear();
        });
    }
    static ItemInfo()
    {
        AppView.ClearTarget();
        var productList = new ListView(AppView.app);
        productList.update();
        productList.onItemClick((item) =>
        {
            ItemModel.RemoveItem(item.id);
            Controller.ItemInfo();
        });
        productList.onUpdateClick((item) => 
        {
            Controller.UpdateItem(item);
        });

    }
    static Summary()
    {
        AppView.ClearTarget();
        var summary = new SummaryView(AppView.app);
        summary.update();

        summary.clear(() => localStorage.clear());
    }

    static UpdateItem(item){
        AppView.ClearTarget();
        var update = new UpdateItem(item.id, AppView.app);
        update.onSaveClick((item) => 
        {
            ItemModel.UpdateItem(item.id, item.newName, item.newPrice);
            Controller.ItemInfo();
        });
    }
}