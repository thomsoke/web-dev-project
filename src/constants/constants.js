const CONSTANTS = {
  subtitle: {
    subtitle1: "my subtitle stuff",
    subtitle2: "this is another subtitle somewhere",
  },

  description: {
    areaOne: "description one",
    areaTwo: "description two",
  },
}


export { CONSTANTS }






















object called CONSTANTS with two sub-objects subtitle and description



four objects (home, subpage1, subpage2, subpage3) with three
data members each (childtext, classname, href)

we put those objects into an array called METADATA_ITEMS

in generateSubheader we call fillSubheaderArray and pass it METADATA_ITEMS
fillSubheaderArray fills an array with the contents of the METADATA_ITEMS
we then use a loop to append each index of the produced array to the
html element (our div in index.html)
