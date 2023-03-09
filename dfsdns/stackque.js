function Stack(){//class
    let items = []

    this.push = (elem) => {
        items.push(elem)
    }

    this.pop = () => {
        items.pop()
    }

    this.peek = () => {
        return items[items.length - 1]
    }

    this.isEmpty = () =>{
        return items.length === 0
    }

    this.size = () => {
        return items.length
    }

    this.clear = () => {
        items = []
    }

    this.print = () => {
        console.log(items.toString())
    }
}

//stack test
const newStack = new Stack()
newStack.push(5)
newStack.push(8)
console.log(newStack.peek())