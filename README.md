# Manda bala
Uso basicão mesmo!

Baixe o pacote usando 
```npm i ng-basictoastr.```

Importe o ToasterModule.
```
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ToasterModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

No app.component.html, insira:
```<apptoastr></apptoastr>```

# Mandando um toastr!
Importe o ToastrService:

```
export class HomeComponent {
    constructor(private api: ToastrService) {
    }
}
```

Feito isso, use:
```
this.api.show("TIPO_DO_ALERTA", "TITULO", "DESCRIÇÃO");
```
Onde:
TIPO_DO_ALERTA: Configurações das cores do alerta.

# Configurações

No app.component.ts, injete o ToastrService e insira novas configurações para o alerta.
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngtoaster';

  constructor(private api: ToastrService) {
  }

  ngOnInit() {
    this.api.colors.push({
      title: "astg", color1: "red", color2: "blue"
    })
  }
  

}
```