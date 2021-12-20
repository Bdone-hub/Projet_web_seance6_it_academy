class Panier{
    constructor(){
        this.list=[];
    }
    add(obj){
        this.list.push(obj);
    }
    remove(obj){
        for( var i = 0; i < this.list.length; i++){                      
            if ( this.list[i] == obj) { 
                this.list.splice(i, 1); 
                i--; 
            }
        }
    }
    getList(){
        return this.list;
    }
    contains(obj){
        return this.list.includes(obj);
    }
    getListLenght(){
        return this.list.length;
    }
    vider(){
        this.list = [];
    }
}

module.exports = Panier;