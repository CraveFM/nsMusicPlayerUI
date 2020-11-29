import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { EventData, SearchBar } from "@nativescript/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    textFieldValue: string = "";
    searchPhrase: string;

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onSearchSubmit(args: EventData): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }
    
    onTaylorSwiftTap(): void {
        this.routerExtensions.navigate(["/detail"]);
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }
}
