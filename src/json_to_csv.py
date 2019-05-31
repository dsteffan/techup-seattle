# Quick script to convert json to a .csv 
# to import into the database.

import pandas as pd
import json

# Read in the json
with open('events.json') as json_file:  
    data = json.load(json_file)

# Instantiate empty list
df = []

# Iterate through every event and select 
# only the relevant information
for event in data["events"]:
    
    try:
        
        df.append({"name": event["name"], 
                   "local_date": event["local_date"],
                   "local_time": event["local_time"],
                   "waitlist_count": event["waitlist_count"],
                   "yes_rsvp_count": event["yes_rsvp_count"],
                   "lat": event["venue"]["lat"],
                   "lon": event["venue"]["lon"],
                   "group_name": event["group"]["name"],
                   "group_urlname": event["group"]["urlname"],
                   "link": event["link"],
                   "visibility": event["visibility"]})

    except: # event is missing "venue"; use group lat/long instead
        
        df.append({"name": event["name"], 
                   "local_date": event["local_date"],
                   "local_time": event["local_time"],
                   "waitlist_count": event["waitlist_count"],
                   "yes_rsvp_count": event["yes_rsvp_count"],
                   "lat": event["group"]["lat"],
                   "lon": event["group"]["lon"],
                   "group_name": event["group"]["name"],
                   "group_urlname": event["group"]["urlname"],
                   "link": event["link"],
                   "visibility": event["visibility"]})
        
# Send list to dataframe so it can be exported as a .csv
df = pd.DataFrame(df)

df.to_csv("../src/events.csv", index = False)