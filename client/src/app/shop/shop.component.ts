import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Color } from '../shared/models/color';
import { ShopParams } from '../shared/models/shopParams';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef;
  products: Product[] = [];
  isMenuOpened: boolean = false;
  isCategoryOpened: boolean = false;
  brands: Brand[] = [];
  color: Color[] = [];
  img: string = '';
  shopParams: ShopParams;
  brandId: number = 0;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to high', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDesc' },
  ];
  totalCount = 0;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.shopParams = shopService.getShopParams();
  }

  ngOnInit(): void {
    // this.onNavigateByQueryParams();
    this.getProducts();
    this.getBrands();
    this.getColors();
  }

  getProducts() {
    this.shopService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        this.totalCount = response.count;
      },
      error: (error) => console.log(error),
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (response) => (this.brands = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error),
    });
  }

  getColors() {
    this.shopService.getColors().subscribe({
      next: (response) => (this.color = [{ id: 0, name: 'All' }, ...response]),
      error: (error) => console.log(error),
    });
  }
  // onNavigateByQueryParams() {
  //   this.activatedRoute.queryParamMap.subscribe((param) => {
  //     this.shopParams.brandId = Number(param.get('brand'));
  //     this.shopParams.pageNumber = 1;
  //     this.getProducts();
  //   });
  // }

  onBrandSelected(brandId: number) {
    const params = this.shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.shopParams = params;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    const params = this.shopService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.shopParams = params;
    this.getProducts();
  }

  onSortSelected(event: any) {
    const params = this.shopService.getShopParams();
    params.sort = event.target.value;
    this.shopService.setShopParams(params);
    this.shopParams = params;

    this.getProducts();
  }
  onPageChanged(event: any) {
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this.shopService.setShopParams(params);
      this.shopParams = params;
      this.getProducts();
    }
  }
  onSearch() {
    const params = this.shopService.getShopParams();
    params.search = this.searchTerm?.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.shopParams = params;

    this.getProducts();
  }
  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }
  toggle() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  toggleCategory(): void {
    this.isCategoryOpened = !this.isCategoryOpened;
  }
  onSortClicked(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }
}
