import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./profile_student_styles";

type Props = {
  navigation: any;
  route: any;
};

export default function StudentProfileScreen({ navigation, route }: Props) {
  const getSearchParams = (require("expo-router") as any).useSearchParams as (() => Record<string, string | undefined>) | undefined;
  const searchParams = (getSearchParams ? getSearchParams() : {}) as { aluno?: string };
  const aluno = (route && route.params && route.params.aluno) || searchParams.aluno || "Aluno";
  const router = useRouter();

  const [nome, setNome] = useState("Ahriel Padia Zancanaro");
  const [turma, setTurma] = useState("A1");
  const [idade, setIdade] = useState("19");
  const [alergia, setAlergia] = useState("Sim");
  const [tipoAlergia, setTipoAlergia] = useState("Alergia a glúten");
  const [nascimento, setNascimento] = useState("07/02/2006");
  const [matricula, setMatricula] = useState("1234567");
  const [editingNome, setEditingNome] = useState(false);
  const [editingTurma, setEditingTurma] = useState(false);
  const [editingIdade, setEditingIdade] = useState(false);
  const [editingTipoAlergia, setEditingTipoAlergia] = useState(false);
  const [editingMatricula, setEditingMatricula] = useState(false);
  const [showAlergiaOptions, setShowAlergiaOptions] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarDate, setCalendarDate] = useState(() => {
    // try to parse existing nascimento (DD/MM/YYYY or DD/MM/YY)
    const parts = nascimento.split("/");
    if (parts.length >= 3) {
      const d = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      let y = parseInt(parts[2], 10);
      if (y < 100) {
        // assume 2-digit year -> 19xx/20xx heuristic: use 2000-2099 for <= 50, else 1900s
        y += y <= 50 ? 2000 : 1900;
      }
      const dt = new Date(y, m, d);
      if (!isNaN(dt.getTime())) return dt;
    }
    return new Date();
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/home/list_students')}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil do aluno</Text>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={70} color="#000" />
        </View>
      </View>

      {/* Calendar modal (Modal aparece acima de tudo) */}
      <Modal
        visible={showCalendar}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.calendarOverlay}>
          <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity onPress={() => setCalendarDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}>
                <Ionicons name="chevron-back" size={22} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.calendarTitle}>{calendarDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</Text>
              <TouchableOpacity onPress={() => setCalendarDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}>
                <Ionicons name="chevron-forward" size={22} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.weekDaysRow}>
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((w, i) => (
                <Text key={i} style={styles.weekDayText}>{w}</Text>
              ))}
            </View>

            <View style={styles.daysGrid}>
              {(() => {
                const year = calendarDate.getFullYear();
                const month = calendarDate.getMonth();
                const firstDay = new Date(year, month, 1).getDay();
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                const cells: any[] = [];
                for (let i = 0; i < firstDay; i++) {
                  cells.push(<View key={'b'+i} style={styles.dayCellEmpty} />);
                }
                for (let d = 1; d <= daysInMonth; d++) {
                  const isSelected = (() => {
                    const parts = nascimento.split('/');
                    if (parts.length >= 3) {
                      const sd = parseInt(parts[0], 10);
                      const sm = parseInt(parts[1], 10) - 1;
                      const sy = parseInt(parts[2], 10);
                      const fullY = sy < 100 ? (sy <= 50 ? 2000 + sy : 1900 + sy) : sy;
                      return sd === d && sm === month && fullY === year;
                    }
                    return false;
                  })();

                  cells.push(
                    <TouchableOpacity
                      key={d}
                      style={[styles.dayCell, isSelected && styles.dayCellSelected]}
                      onPress={() => {
                        // format DD/MM/AA (two-digit year)
                        const dd = String(d).padStart(2, '0');
                        const mm = String(month + 1).padStart(2, '0');
                        const yy = String(year % 100).padStart(2, '0');
                        setNascimento(`${dd}/${mm}/${yy}`);
                        setShowCalendar(false);
                        // update calendarDate selection
                        setCalendarDate(new Date(year, month, d));
                      }}
                    >
                      <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>{d}</Text>
                    </TouchableOpacity>
                  );
                }
                return cells;
              })()}
            </View>

            <View style={styles.calendarFooter}>
              <TouchableOpacity onPress={() => setShowCalendar(false)} style={styles.calendarCloseBtn}>
                <Text style={styles.calendarCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Campo - Nome */}
      <Text style={styles.label}>Nome completo</Text>
      <View style={styles.inputRow}>
        {editingNome ? (
          <>
            <TextInput
              value={nome}
              onChangeText={setNome}
              style={styles.input}
              placeholderTextColor="#bbb"
              autoFocus
              onBlur={() => setEditingNome(false)}
            />
            <TouchableOpacity onPress={() => setEditingNome(false)}>
              <Ionicons name="checkmark" size={20} color="#7FF0FF" style={styles.icon} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[styles.input, { color: "#fff" }]}>{nome}</Text>
            <TouchableOpacity onPress={() => setEditingNome(true)}>
              <Ionicons name="pencil" size={20} color="#ccc" style={styles.icon} />
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Turma + Idade */}
      <View style={styles.rowBetween}>
        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Turma</Text>
          <View style={styles.smallInputRow}>
            {editingTurma ? (
              <>
                <TextInput
                  value={turma}
                  onChangeText={setTurma}
                  style={styles.smallInput}
                  autoFocus
                  onBlur={() => setEditingTurma(false)}
                />
                <TouchableOpacity onPress={() => setEditingTurma(false)}>
                  <Ionicons name="checkmark" size={18} color="#7FF0FF" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={[styles.smallInput, { color: "#fff" }]}>{turma}</Text>
                <TouchableOpacity onPress={() => setEditingTurma(true)}>
                  <Ionicons name="pencil" size={18} color="#ccc" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>

        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Idade</Text>
          <View style={styles.smallInputRow}>
            {editingIdade ? (
              <>
                <TextInput
                  value={idade}
                  onChangeText={setIdade}
                  keyboardType="number-pad"
                  style={styles.smallInput}
                  autoFocus
                  onBlur={() => setEditingIdade(false)}
                />
                <TouchableOpacity onPress={() => setEditingIdade(false)}>
                  <Ionicons name="checkmark" size={18} color="#7FF0FF" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={[styles.smallInput, { color: "#fff" }]}>{idade}</Text>
                <TouchableOpacity onPress={() => setEditingIdade(true)}>
                  <Ionicons name="pencil" size={18} color="#ccc" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>

      {/* Alergia */}
      <Text style={styles.label}>Tem alguma alergia?</Text>
      <View>
        <TouchableOpacity style={styles.alergiaBox} onPress={() => setShowAlergiaOptions(s => !s)}>
          <Text style={styles.alergiaText}>{alergia}</Text>
        </TouchableOpacity>

        {showAlergiaOptions && (
          <View style={styles.alergiaOptionsRow}>
            <TouchableOpacity
              style={[styles.alergiaOption, alergia === "Sim" && styles.alergiaOptionActive]}
              onPress={() => { setAlergia("Sim"); setShowAlergiaOptions(false); }}
            >
              <Text style={[styles.alergiaOptionText, alergia === "Sim" && styles.alergiaOptionTextActive]}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.alergiaOption, alergia === "Não" && styles.alergiaOptionActive]}
              onPress={() => { setAlergia("Não"); setShowAlergiaOptions(false); }}
            >
              <Text style={[styles.alergiaOptionText, alergia === "Não" && styles.alergiaOptionTextActive]}>Não</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Se sim, qual? */}
      <Text style={styles.label}>Se sim, qual?</Text>
      <View style={styles.largeInputRow}>
        {editingTipoAlergia ? (
          <>
            <TextInput
              value={tipoAlergia}
              onChangeText={setTipoAlergia}
              style={styles.largeInput}
              autoFocus
              onBlur={() => setEditingTipoAlergia(false)}
            />
            <TouchableOpacity onPress={() => setEditingTipoAlergia(false)}>
              <Ionicons name="checkmark" size={20} color="#7FF0FF" style={styles.icon} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={[styles.largeInput, { color: "#fff" }]}>{tipoAlergia}</Text>
            <TouchableOpacity onPress={() => setEditingTipoAlergia(true)}>
              <Ionicons name="pencil" size={20} color="#ccc" style={styles.icon} />
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Data de nascimento + Matrícula */}
      <View style={styles.rowBetween}>
        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Data de nascimento</Text>
            <View style={styles.smallInputRow}>
              <Text style={[styles.smallInput, { color: "#fff" }]}>{nascimento}</Text>
              <TouchableOpacity onPress={() => setShowCalendar(true)}>
                <Ionicons name={"calendar"} size={18} color="#ccc" style={styles.smallIcon} />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{ width: "48%" }}>
          <Text style={styles.label}>Matrícula</Text>
          <View style={styles.smallInputRow}>
            {editingMatricula ? (
              <>
                <TextInput
                  value={matricula}
                  onChangeText={setMatricula}
                  style={styles.smallInput}
                  autoFocus
                  onBlur={() => setEditingMatricula(false)}
                />
                <TouchableOpacity onPress={() => setEditingMatricula(false)}>
                  <Ionicons name="checkmark" size={18} color="#7FF0FF" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={[styles.smallInput, { color: "#fff" }]}>{matricula}</Text>
                <TouchableOpacity onPress={() => setEditingMatricula(true)}>
                  <Ionicons name="pencil" size={18} color="#ccc" style={styles.smallIcon} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

