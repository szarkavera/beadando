class InputView
{
  constructor(parent)
    {
        this._elem = document.createElement("section");
        this._elem.classList.add("new");


        this._elem.innerHTML = `<h2>Új tétel hozzáadása</h2>
				
        <form action="">
        
            <p class="message">
                Az új tétel sikeresen rögzítésre került
            </p>
        
            <div>
                <label for="name">Megnevezés</label>
                <input type="text" id="name" value="lakbér">
            </div>
            <div>
                <label for="price">Tétel ára</label>
                <input type="number" id="price" value="10000">
            </div>
            
            <button>Hozzáadás</button>
            
        </form>`

        this._form  = this._elem.querySelector('form');
        this._button = this._elem.querySelector('button');
        this._message = this._elem.querySelector('.message');

        this._message.style.display = "none";
        parent.appendChild(this._elem);
    }
    onSubmit(method)
    {
        this._button.onclick = (e) => {

        
        e.preventDefault();
        var data = {};

        
        for(var elem of this._form.elements){
            if(elem.nodeName == "INPUT")
            {
                var key = elem.id;
                var value = elem.value;

                data[key] = value;

            }

        }
        if(data.name.length > 2 && data.price > 0){
            method(data);
            this._message.style.display = "block";
        }
        
    }
    }
    clear()
    {
        this._form.reset();
    }
}