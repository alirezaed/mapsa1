

function Comments() {
    this.records = [
        {
            id: '1',
            text: 'Great welcoming experience to the Dominican. We used Otium for the airport transport- we were to the resort in 20 minutes. Ralphy has been our concierge for the first half of the stay, he been very helpful- always able to pull through for anything we request',
            username: 'Jake W',
            imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/9e/avatar069.jpg',
            date: 'January 2020',
            point: 11
        },
        {
            id: '2',
            text: 'We travelled as a group of 13 ages 18 to 80 and this resort was enjoyed by all. We’ve been fortunate to travel to many resorts in Punta Cana but the Grand was by far the best',
            username: 'Andrea C',
            imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/55/avatar028.jpg',
            date: 'Jan 2020',
            point: 14
        },
        {
            id: '3',
            text: 'The Hotel opened 1-1,5 hs ago. Everything is new and very clean. Even the cheapest rooms are very spacious (77square meters and room and dinning area with sofa bed are diivided by a sliding door).',
            username: 'sergiogiaco',
            imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/74/avatar056.jpg',
            date: 'Dec 2020',
            point: 11
        }
    ];

    this.like = function (id) {
        console.log('like clicked:' + id);

    }

    this.add= function(record){
        this.records = [...this.records,record]
    }

}

function ElementBuilder(tag){
    this.element = document.createElement(tag);

    this.text = function(text){
        this.element.innerText = text;
        return this;
    }

    this.style = function(name,value){
        this.element.style[name] = value;
        return this;
    }

    // this.eventListener=function(eventName,fn){
    //     this.element.addEventListener(eventName,fn);
    // }

    this.onClick = function(fn){
        this.element.addEventListener('click',fn);
        return this;
    }

    this.appendTo = function(parent){
        parent.appendChild(this.element);
        return this;
    }

    this.build = function(){
        return this.element;
    }
}

const builder = {
    create:function(tag){
        return new ElementBuilder(tag)
    }
}

function Painter(coniatner) {
    
    const comments = new Comments();
    

    function createLogo(){

    }


    this.render = function () {

        const listContainer = builder
            .create('div')
            .style('border','1px solid red')
            .style('height','250px')
            .onClick(function(){

                console.log('clicked');
            })
            .appendTo(coniatner);
        
        
        
        console.log(listContainer);
            

        comments.records.forEach(record=>{
            const { id, imageurl } = record;

            const child = builder
                .create('div')
                .text(record.text)
                .onClick(()=>{
                    
                    comments.like(id);
                })
                .appendTo(listContainer.build());

            const logo = createLogo(imageurl)

            
        })




    }
}


const coniatner = document.getElementById('root');
const app = new Painter(coniatner);
app.render();
