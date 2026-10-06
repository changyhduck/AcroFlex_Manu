#!/bin/bash
# 執行：./activate-venv.sh；目前終端啟用：source ./activate-venv.sh

activate_acroflex_venv() {
  local script_path project_dir
  if [ -n "${ZSH_VERSION:-}" ]; then
    script_path="${(%):-%x}"
  else
    script_path="${BASH_SOURCE[0]}"
  fi
  project_dir="$(cd -- "$(dirname -- "$script_path")" && pwd)" || return 1

  if [ ! -f "$project_dir/.venv/bin/activate" ]; then
    printf '找不到虛擬環境，請先執行：\n  python3 -m venv "%s/.venv"\n' "$project_dir" >&2
    return 1
  fi

  source "$project_dir/.venv/bin/activate" || return 1
  printf '已啟用虛擬環境：%s\n' "$VIRTUAL_ENV"
}

if [ -n "${ZSH_VERSION:-}" ] || [ "${BASH_SOURCE[0]}" != "$0" ]; then
  # source 時保留目前終端環境。
  activate_acroflex_venv
else
  # 直接執行時使用子終端，讓啟用的環境可持續使用。
  activate_acroflex_venv || exit 1
  cd -- "$VIRTUAL_ENV/.." || exit 1
  printf '此終端使用 Bash；輸入 exit 可回到原終端。\n'
  export PS1="(.venv) \w \\$ "
  exec /bin/bash --noprofile --norc -i
fi
