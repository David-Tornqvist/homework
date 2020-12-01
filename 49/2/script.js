function spacer(){
    let str = '\n'.repeat(10)

            
    console.log(str)
}
    
    
function upg1(){
    let str = ' *'.repeat(5)
    
        
    console.log(str)
}
    
    
    
    
    
function upg2(){
    
    let str = ''
    
    for (let i = 10; i > 0; i -= 1) {
        str += "*".repeat(i)
        str = str + '\n' // Lägg till en radbrytning
    }
    
    console.log(str)    
    
}
    
    
function upg3(){
    
    let str = ''
    for (let i = 0; i < 5; i++) {
        str += " *".repeat(5);
        str = str + '\n' // Lägg till en radbrytning
    }
    console.log(str)
}
    
    
function upg4(){
    
    let str = ''
    let space = " "
    for (let i = 0; i < 5; i++) {
        str += " *".repeat(5);
        str = str + '\n' // Lägg till en radbrytning
        str += space
        space += " "
    }
    console.log(str)
}
    
upg1()
spacer()
upg2()
spacer()
upg3()
spacer()
upg4()
    
    