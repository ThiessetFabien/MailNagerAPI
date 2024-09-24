## Schema of offer document model on MongoDB
```json
{
    "id": string,   // auto-increment
    "link": string, // uri
    "date": date,   // date of application
    "contract": [ 
        "CDI", 
        "CDD", 
        "Stage", 
        "Alternance", 
        "Intérim"
        ],
    "hourlyRate": [
        "Temps plein", 
        "Temps partiel", 
        "Mi-temps",
        "Freelance"
        ],
    "compagny": string,
    "location": string,
    "title": string
}
```