class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt){
        this.title = title
        this.viewCnt = viewCnt
    }
    
    static compare(article1, article2){
        return article1 - article2
    }
    // /*문자일떄 과거 문법
    // toString(){
    //     return this.title
    // }
    // //숫자일떄
    // valueOf(){
    //     return this.viewCnt
    // }
    // */
   [Symbol.toPrimitive](hint){
    return hint == 'string' ? this.title : this.viewCnt
   }
}

console.log(Article.publisher)

Article.address = 'seoul'
console.log(Article.address)
console.log(Article)
Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2)) //알아서 시리얼라이징됨

//
console.log(`${article1}`)//이번엔 문자로
console.log(article1 + '')//숫자 + 문자

//
console.log(article1.publisher, article2.publisher, article1.compare)//객체에 없음 static
console.log(Article.title, Article.viewCnt)//new했을때 객체에 있는거
console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))//객체를 만든상태에선 static없음

let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)//배열정렬
articles.sort((a,b) => a - b)//위랑같은데 파라미터가 뭔든간에 a -b형태이면 내림차순
articles.sort((a,b) => b - a)//오름차순 
console.log(articles)