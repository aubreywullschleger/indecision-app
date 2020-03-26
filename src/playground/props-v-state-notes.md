|Props        | State           
| ------------- |:-------------:
| An object     | An object 
| Can be used when rendering     | Can be used when rendering       
| Changes from above cause re-renders | Changes cause re-renders 
| Comes from above | Defined in component itself 
| Can't be changed in component itself | Can be changed by component itself

* Props (if any) get passed to component --> component can pass props (if any) to a child component
* When the component is rendering it has access to props and state