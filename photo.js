class Photo {
    constructor(width = 8, height = 10) {
        this.width = width;
        
        this.height = height;
        
    }
    
    Price(x) {
        let finalPrice;
        if ((this.width==8) && (this.height==10)) {
            finalPrice = 4;
        } else if ((this.width==10) && (this.height==12)) {
            finalPrice = 6;
        } else {
            finalPrice = 10;
        }
        return finalPrice;

    }
    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.Price()}`;
    }
}

let ph1 = new Photo();
let ph2 = new Photo();
console.log(ph1.toString());