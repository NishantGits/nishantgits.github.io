# -------------------------------------------------
# fix-ids.sh – add or replace `id:` front‑matter in every .md file
# -------------------------------------------------
#!/usr/bin/env bash

# Change to the root of your Docusaurus project
cd "/Users/macbookpro/Downloads/NishantGits Site" || exit 1

# Optional: make a quick backup of the whole docs folder
cp -r docs docs.backup_$(date +%Y%m%d_%H%M%S)

# Process each markdown file
find docs -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
  # -------------------------------------------------
  # 1️⃣ Derive the desired ID from the file name (no extension)
  # -------------------------------------------------
  filename=$(basename "$file")
  id="${filename%.*}"                # strip .md

  # -------------------------------------------------
  # 2️⃣ If the file already starts with a front‑matter block …
  # -------------------------------------------------
  if head -n1 "$file" | grep -q '^---'; then
    # a) Remove any existing `id:` line inside the block
    perl -i -pe '
      BEGIN {$found=0}
      if (/^---\s*$/ && !$found) {$found=1; $in=1}
      elsif (/^---\s*$/ && $found && $in) {$in=0}
      if ($in && /^\s*id\s*:/) {$_ = ""}   # delete old id line
      END {print ""} if $in
    ' "$file"

    # b) Insert the new `id:` line right after the opening ---
    perl -i -0777 -pe "
      s/^---\s*\n/---\nid: $id\n/s
    " "$file"
  else
    # -------------------------------------------------
    # 3️⃣ No front‑matter at all → prepend a minimal block
    # -------------------------------------------------
    tmp=$(mktemp)
    {
      echo "---"
      echo "id: $id"
      echo "---"
      cat "$file"
    } > "$tmp"
    mv "$tmp" "$file"
  fi

  echo "✅ Processed $file → id: $id"
done