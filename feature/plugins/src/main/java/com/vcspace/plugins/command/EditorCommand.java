/*
 * This file is part of Visual Code Space.
 *
 * Visual Code Space is free software: you can redistribute it and/or modify it under the terms of
 * the GNU General Public License as published by the Free Software Foundation, either version 3 of
 * the License, or (at your option) any later version.
 *
 * Visual Code Space is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with Visual Code Space.
 * If not, see <https://www.gnu.org/licenses/>.
 */

package com.vcspace.plugins.command;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.vcspace.plugins.Editor;

public interface EditorCommand {
  @NonNull
  String getCommandId();

  @NonNull
  String getName();

  @Nullable
  String getKeyBinding();

  void execute(@NonNull Editor editor);
}