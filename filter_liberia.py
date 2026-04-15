import csv

# 1. Names of the files we are using
input_file = 'FloodArchive.csv'
output_file = 'liberia_floods.csv'

# 2. Open the files
# We use 'utf-8-sig' to handle special characters correctly
with open(input_file, mode='r', encoding='utf-8-sig') as f_in:
    reader = csv.DictReader(f_in)
    
    # Get the headers (the top row like ID, Country, etc.)
    fieldnames = reader.fieldnames

    # 3. Create the new file for Liberia
    with open(output_file, mode='w', encoding='utf-8', newline='') as f_out:
        writer = csv.DictWriter(f_out, fieldnames=fieldnames)
        
        # Write the header row at the very top of our new file
        writer.writeheader()

        # 4. Look through every row in the big file
        count = 0
        for row in reader:
            # Check if the "Country" column says "Liberia"
            if row['Country'] == 'Liberia':
                # If it matches, write it to our new file!
                writer.writerow(row)
                count += 1

print(f"Done! I found {count} floods in Liberia and saved them to {output_file}.")
