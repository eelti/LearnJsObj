function HtmlElement() {
    this.Click = function (){
        console.log('Clicked');
    };
    this.Render = function(){
        return 'Basic Render';
    };
}

HtmlElement.prototype.Focus = function () {
    console.log('Focus');
}

function HtmlSelectElement(items) {
    this.items= items || [];
    this.addItem = function (i) {
        this.items.push(i);
    };
    this.removeItem = function (i) {
        let index = this.items.indexOf(i);
       this.items.slice(index,1);
    };
    this.Render = function () {
        let r = '<Select>\n';
        for (let i = 0; i < this.items.length; i++) {
            r += '\t<li>' + this.items[i] + '</li>\n';
        }
        r += '</Select>\n';
        return r;
    }
}

HtmlSelectElement.prototype =new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImage(source){
    this.Render = function () {
        return '<img src=\"' + source + '\">';
    }
}
HtmlImage.prototype = new HtmlElement();
HtmlImage.prototype.constructor = HtmlImage;

const myElement = [
    new HtmlSelectElement([1,2,3,4,5]),
new HtmlImage('http://abc.com')
];

for(let i of myElement){
    console.log(i.Render());
}
