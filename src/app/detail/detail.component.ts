import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isIOS, ItemEventData, Page, SearchBar } from '@nativescript/core';

@Component({
  selector: 'ns-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    isIOS: boolean;
    textFieldValue: string = "";
    searchPhrase: string;
    listViewData = [
      {
          title: "I Don't Wanna Live Forever (Fifty Shades of Grey)",
          artist: "Taylor Swift, Zayn Malik",
          year: "2016",
          imageUrl: "~/images/layer21@3x.png"
      },
      {
          title: "Blank Space",
          artist: "Taylor Swift",
          year: "2014",
          imageUrl: "~/images/layer20@3x.png"
      },
      {
          title: "End Game",
          artist: "Taylor Swift, Ed Sheeran, Future",
          year: "2017",
          imageUrl: "~/images/layer19@3x.png"
      },
      {
          title: "Love Story",
          artist: "Taylor Swift",
          year: "2009",
          imageUrl: "~/images/layer22@3x.png"
      },
      {
          title: "Everything Has Changed",
          artist: "Taylor Swift, Ed Sheeran",
          year: "2012",
          imageUrl: "~/images/layer23@3x.png"
      },
      {
          title: "Teardrops On My Guitar",
          artist: "Taylor Swift",
          year: "2006",
          imageUrl: "~/images/layer24@3x.png"
      }
    ]

    constructor(private page: Page, private routerExtensions: RouterExtensions) {

        page.actionBarHidden = true;

        if (isIOS) {
            this.isIOS = true;
            page.statusBarStyle = "light";
        }
        else {
            page.backgroundSpanUnderStatusBar = true;
            this.isIOS = false;
        }

    }

    ngOnInit(): void {

    }

    goBack() {
        this.routerExtensions.back();
    }

    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }

}
