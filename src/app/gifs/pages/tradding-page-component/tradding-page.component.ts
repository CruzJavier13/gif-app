import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GiftsListComponent } from '../../components/gifts-list/gifts-list.component';
import { GiftServiceTs } from '../../services/gift.service.ts';

const imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];

@Component({
  selector: 'app-tradding-page-component',
  imports: [GiftsListComponent],
  templateUrl: './tradding-page-component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TraddingPageComponent { 

  images: string[] = imageUrls;
  gifService = inject(GiftServiceTs);
  //gifts = computed( () => this.gifService.trendingGifts() );
  //isLoading = computed( () => this.gifService.loadTrendingGift() );
}
