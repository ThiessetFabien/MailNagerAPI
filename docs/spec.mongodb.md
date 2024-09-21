## Schema of offer document model on MongoDB
```json
{
    "id": number,   // auto-increment
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
        "Mi-temps"
        ],
    "compagny": string,
    "location": string,
    "jobTitle": string
}
```