class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt){
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2){
        return article1 - article2
    }

    [Symbol.toPrimitive](hint){
        return hint == 'sttring'? this.title : this.viewCnt
    }
}

console.log(Article.publisher)

Article.address = 'seoul'
console.log(Article.address)
console.log(Article)
Article.getPrice = function(){
    return 2000
}
console.log(Article.getPrice())

let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

console.log(`${article1}`)
console.log(article1 + 0)

console.log(article1.publisher, article2.publisher, article1.compare)
console.log(Article.title, Article.viewCnt)
console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)
articles.sort((a,b) => a - b)
console.log(articles)