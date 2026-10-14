#!/bin/sh
# Scarica le skill three.js (CloudAI-X/threejs-skills) in .claude/skills, per lavorare sulle scene 3D.
# Non stanno nel repository: il progetto d'origine non contiene un file di licenza. Restano solo in locale.
set -e
DEST="$(dirname "$0")/../.claude/skills"
TMP="$(mktemp -d)"
git clone -q --depth 1 https://github.com/CloudAI-X/threejs-skills.git "$TMP/ts"
mkdir -p "$DEST"
cp -r "$TMP/ts/skills/"* "$DEST/"
rm -rf "$TMP"
echo "Skill three.js copiate in .claude/skills"
