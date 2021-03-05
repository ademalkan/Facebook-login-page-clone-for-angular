import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  dilListe: any[] = [
    {dil : "Türkçe"},
    {dil : "Kurdî (Kurmancî)"},
    {dil : "العربية"},
    {dil : "English (UK)"},
    {dil : "Zaza"},
    {dil : "Deutsch"},
    {dil : "Русский"},
    {dil : "Français (France)"},
    {dil : "فارسی"},
    {dil : "Español"},
    {dil : "Português (Brasil)"}
  ]

  navItem: any[] = [
    {item : "Kaydol"},
    {item : "Giriş Yap"},
    {item : "Messenger"},
    {item : "Facebook Lite"},
    {item : "Watch"},
    {item : "Kişiler"},
    {item : "Sayfalar"},
    {item : "Sayfa Kategorileri"},
    {item : "Yerler"},
    {item : "Oyunlar"},
    {item : "Konumlar"},
    {item : "Marketplace"},
    {item : "Facebook Pay"},
    {item : "Gruplar"},
    {item : "İş Fırsatları"},
    {item : "Oculus"},
    {item : "Portal"},
    {item : "Instagram"},
    {item : "Yerel"},
    {item : "Bağış Kampanyaları"},
    {item : "Hizmetler"},
    {item : "Oy Kullanma Bilgi Merkezi"},
    {item : "Hakkımızda"},
    {item : "Reklam Oluştur"},
    {item : "Sayfa Oluştur"},
    {item : "Geliştiriciler"},
    {item : "Kariyer Olanakları"},
    {item : "Gizlilik"},
    {item : "Çerezler"},
    {item : "Ad Choices"},
    {item : "Koşullar"},
    {item : "Yardım"}
  ]

  
  ngOnInit(): void {
  }

}
