# Music Player UI

[<img src="https://github.com/angular/angular/blob/master/aio/src/assets/images/logos/angular/angular.png" width="31" height="31"></img>](https://play.nativescript.org/?template=play-ng&id=EaETCw&v=54) An app design for an engaging music player app.

![image](https://raw.githubusercontent.com/NativeScript/code-samples/master/screens/music-player-ui.gif)

Example taken from [:bookmark:`nativescript.rocks`](https://plugins.nativescript.rocks/samples) and can be used as a template since it has already been converted to [NativeScript 7](https://nativescript.org/blog/nativescript-7-announcement)

## :o: Create a project by using this template

```
$ ns create nsMusicPlayerUI --template https://github.com/CraveFM/nsMusicPlayerUI
```


## :a: From Scratch

* Create a blank NativeScript/Angular/sass project

```
% ns create nsMusicPlayerUI --template @nativescript/template-blank-ng
```

## Configure

##### :bangbang: Installing Angular CLI

The project uses `Angular` CLI, if not install on your machine use the below command:

```
$ npm install @angular/cli --global
```

##### :bangbang: Installing [NS Schematics](https://docs.nativescript.org/tooling/angular-cli) to create Angular Components

```
$ npm install @schematics/angular @nativescript/schematics tslint --save-dev
```

##### webpack config

- [ ] Edit the file `webpack.config.js`, add the `images` section to the `copyTargets` variable

The `images` folder will be copied to the final tarballs

```
    { from: 'images/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
```

:bulb: Final Result of `copyTargets` variable

```
  const copyTargets = [
    { from: 'assets/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'fonts/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'images/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    ...copyReplacements
  ];
```

- [ ] Generate the Detail Component

```
% ng generate component detail --skipTests=true 
```

- [ ] Lets remove the `spec` and `tns` files

```
$ find src/app -name "*.[s-t]*.*"  -exec rm {} \;
```

## :a: Home Component

- [ ] Create a new `home.component.css` stylesheet file,

```css
ActionBar{
    background-color:transparent;
  }
  
  /* #home-page-background{        
      background: linear-gradient(to bottom, #44557f 15%, #f8f8f8 15%);
  } */
  
  .album-image{
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  }
  
  .home-panel{
      vertical-align: center; 
      font-size: 20;
      margin: 15;
  }
  
  .description-label{
      margin-bottom: 15;
  }
  
  #searchRow{
      margin-top: 20;
  }
```

* Save the file under the `src/app/home` directory

- [ ] Open the `home.component.ts` class file,

* add the `styleUrls` property to the `@Component` Decorator:

```typescript
@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
```

* add the instance variables before the constructor:

```html
    textFieldValue: string = "";
    searchPhrase: string;
```

* Add the RouterExtensions to the constructor

```typescript
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }
```

* Add the below methods after `ngOnInit` method

```typescript
    onSearchSubmit(args: EventData): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }
    
    onTaylorSwiftTap(): void {
        this.routerExtensions.navigate(["/detail"]);
    }
```

:bulb: Final Result

```typescript
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

}
```

- [ ] Open the `home.component.html` template file,

```html
<ActionBar backgroundColor="#44557f" flat="true">
    <StackLayout orientation="vertical" width="100%" height="100%"
        backgroundColor="#44557f">
        <StackLayout backgroundColor="#44557f">
            <StackLayout #searchRow orientation="horizontal" marginTop="5">
                <TextField backgroundColor="white" paddingLeft="20"
                    borderRadius="20" [(ngModel)]="textFieldValue" width="80%"
                    height="40" fontSize="14" hint="Search"></TextField>
                <Image src="~/images/shape4@3x.png" height="30" width="30"
                    marginLeft="10"></Image>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</ActionBar>


<GridLayout orientation="vertical" width="100%" height="100%" columns="*"
    rows="*,auto">

    <StackLayout col="0" row="0" backgroundColor="#f8f8f8">
        <StackLayout backgroundColor="#44557f" paddingBottom="15" marginTop="-10">
            <Label text="Popular Songs" class="font-weight-bold" color="#FFFFFF"
                padding="15" fontSize="24"></Label>
        </StackLayout>

        <StackLayout paddingLeft="20" paddingRight="20" paddingTop="20"
            paddingBottom="5" marginTop="-20" backgroundImage="~/images/layer14@3x.png"
            borderRadius="5" height="180" width="90%" (tap)="onTaylorSwiftTap()"
            stretch="aspectFit">
            <GridLayout columns="*" rows="auto,*,auto" height="100%">

                <GridLayout columns="auto,*,auto" rows="auto,auto" col="0"
                    row="2" marginBottom="5">
                    <Label col="0" row="0" class="font-weight-bold" fontSize="18"
                        color="#FFFFFF" text="Hip Hop so far 2018"></Label>
                    <Label col="0" row="1" class="font-weight-bold" fontSize="16"
                        color="#FFFFFF" text="By #Bruno Mars"></Label>
                </GridLayout>


            </GridLayout>

        </StackLayout>

        <ScrollView orientation="vertical">
            <StackLayout>
                <GridLayout columns="auto,*,auto" rows="auto">
                    <Label col="0" row="0" class="font-weight-bold"
                        paddingLeft="10" fontSize="20" color="#000000" text="Featured Albums"></Label>
                    <Label col="2" row="0" class="font-weight-bold"
                        marginRight="20" fontSize="14" color="#8d8d8d" text="View All (146)"></Label>
                </GridLayout>


                <ScrollView orientation="horizontal">
                    <StackLayout orientation="horizontal">
                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                width="125" backgroundImage="~/images/layer4@3x.png"
                                borderRadius="5">
                                <Button horizontalAlignment="right"
                                    marginRight="5" marginTop="80" width="50"
                                    height="20" class="fa btn-rounded-sm"
                                    text="&#xf005; 4.9" color="#FFFFFF"
                                    backgroundColor="#3b75ff"></Button>
                            </StackLayout>
                            <Label fontSize="14" class="font-weight-bold"
                                color="#000000" text="Havana (Remix)"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>
                        </StackLayout>

                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                width="125" backgroundImage="~/images/layer5@3x.png"
                                borderRadius="5">
                                <Button horizontalAlignment="right"
                                    marginRight="5" marginTop="80" width="50"
                                    height="20" class="fa btn-rounded-sm"
                                    text="&#xf005; 4.9" color="#FFFFFF"
                                    backgroundColor="#3b75ff"></Button>
                            </StackLayout>
                            <Label fontSize="14" class="font-weight-bold"
                                color="#000000" text="Sweetener"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>
                        </StackLayout>

                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                backgroundImage="~/images/layer6@3x.png"
                                borderRadius="5">
                                <Button horizontalAlignment="right"
                                    marginRight="5" marginTop="80" width="50"
                                    height="20" fontSize="14" class="fa btn-rounded-sm"
                                    text="&#xf005; 4.9" color="#FFFFFF"
                                    backgroundColor="#3b75ff"></Button>
                            </StackLayout>
                            <Label width="125" fontSize="14" class="font-weight-bold"
                                color="#000000" textWrap="true" text="Glory Days: The Platinum Edition"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>

                        </StackLayout>
                    </StackLayout>
                </ScrollView>

                <GridLayout columns="auto,*,auto" rows="auto">
                    <Label col="0" row="0" class="font-weight-bold"
                        paddingLeft="10" fontSize="20" color="#000000" text="Trending Artists"></Label>
                    <Label col="2" row="0" class="font-weight-bold"
                        marginRight="20" fontSize="14" color="#8d8d8d" text="View All"></Label>
                </GridLayout>

                <ScrollView orientation="horizontal">
                    <StackLayout orientation="horizontal">
                        <StackLayout margin="10" height="130" width="110"
                            backgroundColor="#FFFFFF" borderRadius="5">
                            <Image src="~/images/shape@3x.png" width="20"
                                height="20" horizontalAlignment="right"
                                marginRight="5"></Image>
                            <StackLayout horizontalAlignment="center"
                                verticalAlignment="center">

                                <Image height="50" width="50" src="~/images/layer7@3x.png"
                                    borderRadius="50"></Image>
                                <Label fontSize="14" class="font-weight-bold"
                                    color="#000000" text="Bruno Mars"></Label>
                                <Label fontSize="12" color="#999999" text="228 Songs"
                                    horizontalAlignment="center"
                                    verticalAlignment="center"></Label>

                            </StackLayout>
                            <Button width="75" class="btn-rounded-lg" text="View All"
                                textTransform="none" marginBottom="5"
                                backgroundColor="#89acff" color="#FFFFFF"
                                (tap)="onButtonTap()"></Button>
                        </StackLayout>

                        <StackLayout margin="10" height="130" width="110"
                            backgroundColor="#FFFFFF" borderRadius="5">
                            <Image src="~/images/shape@3x.png" width="20"
                                height="20" horizontalAlignment="right"
                                marginRight="5"></Image>
                            <StackLayout horizontalAlignment="center"
                                verticalAlignment="center">
                                <Image height="50" width="50" src="~/images/layer8@3x.png"
                                    borderRadius="50"></Image>
                                <Label fontSize="14" class="font-weight-bold"
                                    color="#000000" text="Ariana Grande"></Label>
                                <Label fontSize="12" color="#999999" text="185 Songs"
                                    horizontalAlignment="center"
                                    verticalAlignment="center"></Label>

                            </StackLayout>
                            <Button width="75" class="btn-rounded-lg" text="View All"
                                textTransform="none" marginBottom="5"
                                backgroundColor="#89acff" color="#FFFFFF"
                                (tap)="onButtonTap()"></Button>
                        </StackLayout>

                        <StackLayout margin="10" height="130" width="110"
                            backgroundColor="#FFFFFF" borderRadius="5">
                            <Image src="~/images/shape@3x.png" width="20"
                                height="20" horizontalAlignment="right"
                                marginRight="5"></Image>
                            <StackLayout horizontalAlignment="center"
                                verticalAlignment="center">
                                <Image height="50" width="50" src="~/images/layer9@3x.png"
                                    borderRadius="50"></Image>
                                <Label fontSize="14" class="font-weight-bold"
                                    color="#000000" text="Big Sean"></Label>
                                <Label fontSize="12" color="#999999" text="178 Songs"
                                    horizontalAlignment="center"
                                    verticalAlignment="center"></Label>
                            </StackLayout>
                            <Button width="75" class="btn-rounded-lg" text="View All"
                                textTransform="none" marginBottom="5"
                                backgroundColor="#89acff" color="#FFFFFF"
                                (tap)="onButtonTap()"></Button>
                        </StackLayout>

                    </StackLayout>
                </ScrollView>

                <GridLayout columns="auto,*,auto" rows="auto">
                    <Label col="0" row="0" class="font-weight-bold"
                        paddingLeft="10" fontSize="20" color="#000000" text="Top Songs"></Label>
                    <Label col="2" row="0" class="font-weight-bold"
                        marginRight="20" fontSize="14" color="#8d8d8d" text="View All"></Label>
                </GridLayout>

                <ScrollView orientation="horizontal">
                    <StackLayout orientation="horizontal">
                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                width="125" backgroundImage="~/images/layer10@3x.png"
                                borderRadius="5">
                            </StackLayout>
                            <Label fontSize="14" class="font-weight-bold"
                                color="#000000" text="Wings"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>
                        </StackLayout>

                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                width="125" backgroundImage="~/images/layer11@3x.png"
                                borderRadius="5">
                            </StackLayout>
                            <Label fontSize="14" class="font-weight-bold"
                                color="#000000" text="SAX"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>
                        </StackLayout>

                        <StackLayout margin="10">
                            <StackLayout class="album-image" height="110"
                                backgroundImage="~/images/layer12@3x.png"
                                borderRadius="5">
                            </StackLayout>
                            <Label width="125" fontSize="14" class="font-weight-bold"
                                color="#000000" textWrap="true" text="You Know I Know"></Label>
                            <Label fontSize="12" color="#999999" text="2018"></Label>

                        </StackLayout>
                    </StackLayout>
                </ScrollView>


            </StackLayout>
        </ScrollView>
    </StackLayout>

    <StackLayout col="0" row="1" orientation="horizontal" backgroundColor="#FFFFFF"
        height="60">
        <GridLayout rows="*" columns="*,*,*,*,*">
            <Image col="0" row="0" (tap)="onButtonTap()" height="25" width="25"
                margin="10" src="~/images/shape2@3x.png"></Image>
            <Image col="1" row="0" (tap)="onButtonTap()" height="25" width="25"
                margin="10" src="~/images/shape1@3x.png"></Image>
            <Image col="2" row="0" (tap)="onButtonTap()" height="60" width="60"
                margin="10" src="~/images/home@3x.png"></Image>
            <Image col="3" row="0" (tap)="onButtonTap()" height="25" width="25"
                margin="10" src="~/images/shape3@3x.png"></Image>
            <Image col="4" row="0" (tap)="onButtonTap()" height="25" width="25"
                margin="10" src="~/images/icon04@3x.png"></Image>
        </GridLayout>
    </StackLayout>

</GridLayout>
```


# Libraries

## :one: Free ** [Progress NativeScript UI](https://github.com/ProgressNS/nativescript-ui-samples)

** Although the components are free, they are not open-source and their code is proprietary

```
$ npm install --save \
      nativescript-ui-chart \
      nativescript-ui-listview \
      nativescript-ui-sidedrawer \
      nativescript-ui-calendar \
      nativescript-ui-autocomplete \
      nativescript-ui-dataform \
      nativescript-ui-gauge
```

# Plugins

:pushpin: [@nativescript/plugins](https://github.com/NativeScript/plugins) used

```
$ ns plugin add @nativescript/background-http; \
  ns plugin add @nativescript/camera; \
  ns plugin add @nativescript/geolocation; \
  ns plugin add @nativescript/imagepicker; \
  ns plugin add @nativescript/intl; \
  ns plugin add @nativescript/iqkeyboardmanager; \
  ns plugin add @nativescript/social-share
```

:pushpin: Others not really used

```
$ ns plugin add nativescript-accelerometer; \
  ns plugin add @progress-nativechat/nativescript-nativechat; \
  ns plugin add nativescript-image;
```

