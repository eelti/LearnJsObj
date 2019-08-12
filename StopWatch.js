/* function Person(FirstName, LastName, MusicStyle) {
    this.FirstName = FirstName,
    this.LastName = LastName,
    this.MusicStyle = MusicStyle;
    let Age = 99;
    Object.defineProperty(this, 'MyAge', {
        get: function(){
            return Age;`
        },
        set: function(value){
            if(value < 40 || value > 90 )
               throw new Error('The value of age is not permited... Please select good age');
            Age = value;
        }
    });

}
const eric = new Person("Eric", "Leduc", ["Quebecois", "Rock", "Jazz"]);
console.log(eric.FirstName);
 */


function StopWatch0(){
    let duration= 0, starTime = new Date(), stopTime = new Date(), isStarted = false;
    Object.defineProperty(this, 'Duration', {
        get: function(){
            return duration;
        }
    });

    this.reset = function() {
        if(isStarted) throw new Error('Stop before reset');
        duration = 0;
        starTime = 0;
        stopTime = 0;
    }

    this.start = function(){
        if (isStarted) throw new Error('is already strated');
        isStarted = true;
        starTime = new Date().getTime();
    }

    this.stop = function(){
        if(!isStarted) throw new Error('Is not started... Cant stop')
        stopTime = new Date().getTime();
        isStarted = false;
        duration = duration + ((stopTime - starTime) / 1000);
        console.log(duration, 'sec');
    }

}

function StopWatch() {
    let duration = 0, starTime = new Date(), stopTime = new Date(), isStarted = false;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function (v) {
            duration = v;
        }
    });
    Object.defineProperty(this, 'straTime',{
        get: function(){
            return starTime;
        },
        set: function(v){
            starTime = v;
        }
    });
    Object.defineProperty(this, 'stopTime',{get() {return stopTime;
        }, set(v) {stopTime = v;}});
    Object.defineProperty(this, 'isStarted',{get() {return isStarted;
        }, set(v){isStarted = v}});
}

StopWatch.prototype.reset = function() {
        if(this.isStarted) throw new Error('Stop before reset');
        this.duration = 0;
        this.starTime = 0;
        this.stopTime = 0;
    };

    StopWatch.prototype.start = function(){
        if (this.isStarted) throw new Error('is already started');
        this.isStarted = true;
        this.starTime = new Date().getTime();
    };

    StopWatch.prototype.stop = function(){
        if(!this.isStarted) throw new Error('Is not started... Cant stop')
        this.stopTime = new Date().getTime();
        this.isStarted = false;
        this.duration = this.duration + ((this.stopTime - this.starTime) / 1000);
        console.log(this.duration, 'sec');
    };

