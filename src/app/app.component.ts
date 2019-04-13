import {Component} from "@angular/core"

@Component({
    selector:"app",
    template: require("./app.component.html")
})

export class AppComponent{

    n1: number
    n2: number
    n3: number

    sumar(){
        this.n3 = this.n1 + this.n2
    }

    restar(){
        this.n3 = this.n1 - this.n2
    }

    multiplicar(){
        this.n3 = this.n1 * this.n2
    }

    dividir(){
        this.n3 = this.n1 / this.n2
    }
}