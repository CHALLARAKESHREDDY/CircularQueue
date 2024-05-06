//CircularQueue

// Online Javascript Editor for free

//ircular Queue with array will have better performace than object
{/*In a circular queue, the order of elements is crucial. Elements are enqueued at the rear of the queue and dequeued from the front,
maintaining the order in which they were added. Additionally, the circular nature of the queue ensures that elements wrap around from 
the end of the underlying array (or object) to the beginning when necessary, preserving the order of elements even as the queue grows or shrinks.

The order of elements in a circular queue is significant because it determines the sequence in which elements are processed. This is essential for
scenarios where maintaining the order of operations or data is important, such as in task scheduling, job processing, or event handling systems.

Therefore, when implementing a circular queue, it's crucial to ensure that the order of elements is preserved and that operations such as enqueueing 
and dequeueing maintain this order correctly. This ensures the integrity and reliability of the queue data structure for various applications and use cases. */}


class CircularQueue {
    constructor(capacity) {
        this.queue=new Array(capacity)
        this.capacity=capacity
        this.rear=0
        this.front=0
        this.size=0
    }
    
    Enqueue(element) {
       if (this.IsFull()){
           console.log("CircukarQueue is full")
           return "CircukarQueue is full"
       }
        this.queue[this.rear]=element
        this.rear=(this.rear+1)%this.capacity
        this.size++
     return "Element enqueued successfully";
    }

    Dequeue() {
        if (this.IsEmpty()){
            return "CircularQueue is Empty"
        }
        const item = this.queue[this.front]
        this.queue[this.front]=undefined
        this.front=(this.front+1)%this.capacity
        this.size--
        return item
    }

    Size() {
        return this.size
    }

    IsEmpty() {
        return this.size === 0
    }

    IsFull() {
        return this.size===this.capacity
    }

    Peek() {
        if (this.IsEmpty()){
            return null
        }
        return this.queue[this.front]
    }

    Print (){
        let index=this.front
        const output=[]
        for (let i=0;i<this.size;i++){
            output.push(this.queue[index])
            index=(index+1)%this.capacity
        }
        console.log(output)
    }

    PrintDirect (){
        console.log(this.queue)
        return null
    }
    
}

const queue=new CircularQueue(5)

queue.Enqueue(1)
queue.Print()
queue.PrintDirect()
queue.Enqueue("Ramesh")
queue.Enqueue("Rakesh")
queue.Enqueue("Ramu")
queue.Enqueue("Bintu")
queue.Enqueue("Mithu")
queue.Print()
queue.Enqueue("Sarojana")
queue.Print()
console.log(queue.Peek())
queue.Print()
console.log(queue.Size())
queue.Print()
queue.Dequeue()
queue.Print()
queue.Dequeue()
queue.Print()
queue.Dequeue()
queue.Print()
console.log(queue.IsEmpty())
queue.Print()
console.log(queue.Peek())
queue.Print()
console.log(queue.Size())


