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
  shopParams = new ShopParams();
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
  ) {}

  ngOnInit(): void {
    this.onNavigateByQueryParams();
    this.getProducts();
    this.getBrands();
    this.getColors();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (response) => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
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
  onNavigateByQueryParams() {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.shopParams.brandId = Number(param.get('brand'));
      this.shopParams.pageNumber = 1;
      this.getProducts();
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }
  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
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
