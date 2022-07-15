import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
      /*this.post = post;
      this.title.setTitle(post.title);*/
      this.meta.updateTag({name: 'description', content: '...'});
    })
    
    
  }

}
